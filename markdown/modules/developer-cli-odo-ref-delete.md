{%- set _mod_docs_content_type = "REFERENCE" %}
# odo delete {id="odo-delete_{{ context }}"}

The `odo delete` command is useful for deleting resources that are managed by `odo`.

## Deleting a component {id="_deleting_a_component"}

To delete a _devfile_ component, run the `odo delete` command:

```terminal
$ odo delete
```

If the component has been pushed to the cluster, the component is deleted from the cluster, along with its dependent storage, URL, secrets, and other resources.
If the component has not been pushed, the command exits with an error stating that it could not find the resources on the cluster.

Use the `-f` or `--force` flag to avoid the confirmation questions.

## Undeploying devfile Kubernetes components {id="_undeploying_devfile_kubernetes_components"}

To undeploy the devfile Kubernetes components, that have been deployed with `odo deploy`, execute the `odo delete` command with the `--deploy` flag:

```terminal
$ odo delete --deploy
```

Use the `-f` or `--force` flag to avoid the confirmation questions.

## Delete all {id="_delete_all"}

To delete all artifacts including the following items, run the `odo delete` command with the `--all` flag :

*   _devfile_ component
*   Devfile Kubernetes component that was deployed using the `odo deploy` command
*   Devfile
*   Local configuration

```terminal
$ odo delete --all
```

## Available flags {id="_available_flags"}


`-f`, `--force`
:   Use this flag to avoid the confirmation questions.

`-w`, `--wait`
:   Use this flag to wait for component deletion and any dependencies. This flag does not work when undeploying.

The documentation on _Common Flags_ provides more information on the flags available for commands.