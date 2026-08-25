{%- set _mod_docs_content_type = "REFERENCE" %}
# odo registry {id="odo-registry_{{ context }}"}

`odo` uses the portable _devfile_ format to describe the components. `odo` can connect to various devfile registries, to download devfiles for different languages and frameworks.

You can connect to publicly available devfile registries, or you can install your own _Secure Registry_.

You can use the `odo registry` command to manage the registries that are used by `odo` to retrieve devfile information.

## Listing the registries {id="_listing_the_registries"}

To list the registries currently contacted by `odo`, run the command:

```terminal
$ odo registry list
```

```terminal title="Example output"
NAME                       URL                             SECURE
DefaultDevfileRegistry     https://registry.devfile.io     No
```

`DefaultDevfileRegistry` is the default registry used by odo; it is provided by the [devfile.io](https://devfile.io) project.

## Adding a registry {id="_adding_a_registry"}

To add a registry, run the command:

```terminal
$ odo registry add
```

```terminal title="Example output"
$ odo registry add StageRegistry https://registry.stage.devfile.io
New registry successfully added
```

If you are deploying your own Secure Registry, you can specify the personal access token to authenticate to the secure registry with the `--token` flag:

```terminal
$ odo registry add MyRegistry https://myregistry.example.com --token <access_token>
New registry successfully added
```

## Deleting a registry {id="_deleting_a_registry"}

To delete a registry, run the command:

```terminal
$ odo registry delete
```

```terminal title="Example output"
$ odo registry delete StageRegistry
? Are you sure you want to delete registry "StageRegistry" Yes
Successfully deleted registry
```

Use the `--force` (or `-f`) flag to force the deletion of the registry without confirmation.

## Updating a registry {id="_updating_a_registry"}

To update the URL or the personal access token of a registry already registered, run the command:

```terminal
$ odo registry update
```

```terminal title="Example output"
 $ odo registry update MyRegistry https://otherregistry.example.com --token <other_access_token>
 ? Are you sure you want to update registry "MyRegistry" Yes
 Successfully updated registry
```

Use the `--force` (or `-f`) flag to force the update of the registry without confirmation.