{%- set _mod_docs_content_type = "REFERENCE" %}
# Deletion lifecycle hook configuration {id="machine-lifecycle-hook-deletion-format_{{ context }}"}

The following YAML snippets demonstrate the format and placement of deletion lifecycle hook configurations within a machine set: {._abstract}

```yaml title="YAML snippet demonstrating a preDrain lifecycle hook"
apiVersion: machine.openshift.io/v1beta1
kind: Machine
metadata:
  ...
spec:
  lifecycleHooks:
    preDrain:
    - name: <hook_name>
      owner: <hook_owner>
  ...
```
where:


`<hook_name>`
:   Specifies the name of the `preDrain` lifecycle hook.

`<hook_owner>`
:   Specifies the hook-implementing controller that manages the `preDrain` lifecycle hook.

```yaml title="YAML snippet demonstrating a preTerminate lifecycle hook"
apiVersion: machine.openshift.io/v1beta1
kind: Machine
metadata:
  ...
spec:
  lifecycleHooks:
    preTerminate:
    - name: <hook_name>
      owner: <hook_owner>
  ...
```
where:


`<hook_name>`
:   Specifies the name of the `preDrain` lifecycle hook.

`<hook_owner>`
:   Specifies the hook-implementing controller that manages the `preDrain` lifecycle hook.

## Example lifecycle hook configuration {id="machine-lifecycle-hook-deletion-example_{{ context }}"}

The following example demonstrates the implementation of multiple fictional lifecycle hooks that interrupt the machine deletion process:

```yaml title="Example configuration for lifecycle hooks"
apiVersion: machine.openshift.io/v1beta1
kind: Machine
metadata:
  ...
spec:
  lifecycleHooks:
    preDrain:
    - name: MigrateImportantApp
      owner: my-app-migration-controller
    preTerminate:
    - name: BackupFileSystem
      owner: my-backup-controller
    - name: CloudProviderSpecialCase
      owner: my-custom-storage-detach-controller
    - name: WaitForStorageDetach
      owner: my-custom-storage-detach-controller
  ...
```
where:


`spec.lifecycleHooks.preDrain`
:   Specifies a `preDrain` lifecycle hook stanza that contains a single lifecycle hook.

`spec.lifecycleHooks.preTerminate`
:   Specifies a `preTerminate` lifecycle hook stanza that contains three lifecycle hooks. Note that one controller can own multiple lifecycle hooks, as `my-custom-storage-detach-controller` does in the example.