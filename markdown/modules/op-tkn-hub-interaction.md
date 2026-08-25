# Hub interaction commands {id="op-tkn-hub-interaction_{{ context }}"}

Interact with Tekton Hub for resources such as tasks and pipelines.

## hub {id="_hub"}
Interact with hub.

```terminal title="Example: Display help"
$ tkn hub -h
```

```terminal title="Example: Interact with a hub API server"
$ tkn hub --api-server https://api.hub.tekton.dev
```


:::note

For each example, to get the corresponding sub-commands and flags, run `tkn hub <command> --help`.

:::


## hub downgrade {id="_hub_downgrade"}
Downgrade an installed resource.

```terminal title="Example: Downgrade the mytask task in the mynamespace namespace to its older version"
$ tkn hub downgrade task mytask --to version -n mynamespace
```

## hub get {id="_hub_get"}
Get a resource manifest by its name, kind, catalog, and version.

```terminal title="Example: Get the manifest for a specific version of the myresource pipeline or task from the tekton catalog"
$ tkn hub get [pipeline | task] myresource --from tekton --version version
```

## hub info {id="_hub_info"}
Display information about a resource by its name, kind, catalog, and version.

```terminal title="Example: Display information about a specific version of the mytask task from the tekton catalog"
$ tkn hub info task mytask --from tekton --version version
```

## hub install {id="_hub_install"}
Install a resource from a catalog by its kind, name, and version.

```terminal title="Example: Install a specific version of the mytask task from the tekton catalog in the mynamespace namespace"
$ tkn hub install task mytask --from tekton --version version -n mynamespace
```

## hub reinstall {id="_hub_reinstall"}
Reinstall a resource by its kind and name.

```terminal title="Example: Reinstall a specific version of the mytask task from the tekton catalog in the mynamespace namespace"
$ tkn hub reinstall task mytask --from tekton --version version -n mynamespace
```

## hub search {id="_hub_search"}
Search a resource by a combination of name, kind, and tags.

```terminal title="Example: Search a resource with a tag cli"
$ tkn hub search --tags cli
```

## hub upgrade {id="_hub_upgrade"}
Upgrade an installed resource.

```terminal title="Example: Upgrade the installed mytask task in the mynamespace namespace to a new version"
$ tkn hub upgrade task mytask --to version -n mynamespace
```