{%- set _mod_docs_content_type = "CONCEPT" %}
# Getting help {id="cli-getting-help_{{ context }}"}

You can get help with CLI commands and {{ microshift_short }} resources in the following ways. {._abstract}

*   Use `oc help --flag` to get information about a specific CLI command:
    ```terminal title="Example: Get help for the oc create command"
    $ oc create --help
    ```
    ```terminal title="Example output"
    Create a resource by filename or stdin

    JSON and YAML formats are accepted.

    Usage:
      oc create -f FILENAME [flags]

    ...
    ```
*   Use the `oc explain` command to view the description and fields for a particular resource:
    ```terminal title="Example: View documentation for the Pod resource"
    $ oc explain pods
    ```
    ```terminal title="Example output"
    KIND:     Pod
    VERSION:  v1

    DESCRIPTION:
         Pod is a collection of containers that can run on a host. This resource is
         created by clients and scheduled onto hosts.

    FIELDS:
       apiVersion	<string>
         APIVersion defines the versioned schema of this representation of an
         object. Servers should convert recognized schemas to the latest internal
         value, and may reject unrecognized values. More info:
         https://git.k8s.io/community/contributors/devel/api-conventions.md#resources

    ...
    ```