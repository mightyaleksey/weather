#!/bin/sh

__project_dir=$(realpath $0 | xargs dirname | xargs dirname)

function find_module() {
  local directory=$(echo "$1" | cut -d "/" -f1)
  local dirpath=$(find node_modules -type d -name "$directory")
  local restpath=${1/"$directory"/}

  echo "$dirpath$restpath"
}

function fix_jsx_props_no_multi_spaces() {
  local filepath=$(find_module "eslint-plugin-react/lib/rules/jsx-props-no-multi-spaces.js")

  if [[ -f "$__project_dir/$filepath" ]]; then
    local line=$(sed '112!d' "$__project_dir/$filepath")

    if [[ $line = "      return nodeTypeArguments.type === 'TSTypeParameterInstantiation';" ]]; then
      sed -i '' "112s/      return nodeTypeArguments.type === 'TSTypeParameterInstantiation';/      return nodeTypeArguments?.type === 'TSTypeParameterInstantiation';/" "$__project_dir/$filepath"
    fi
  fi
}

fix_jsx_props_no_multi_spaces
