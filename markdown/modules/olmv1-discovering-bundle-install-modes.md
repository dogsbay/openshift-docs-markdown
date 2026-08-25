{%- set _mod_docs_content_type = "PROCEDURE" %}

# Discovering bundle install modes {id="olmv1-discovering-bundle-install-modes_{{ context }}"}

You can render the bundle metadata to find which install modes a bundle supports. {._abstract}

**Prerequisites**

*   You have installed the `jq` CLI tool.
*   You have installed the `opm` CLI tool.

**Procedure**

1.  Render the bundle metadata by running the following command:
    ```terminal
    $ opm render <bundle_image> -o json | \
      jq 'select(.schema == "olm.bundle") | .properties[] | select(.type == "olm.bundle.object")'
    ```
    ```json title="Example output"
    {
      "type": "olm.bundle.object",
      "value": {
        "data": "...",
        "ref": "olm.csv"
      }
    }
    ```
1.  Decode the base64-encoded CSV data to view install mode declarations:
    ```terminal
    $ echo "<base64_data>" | base64 -d | jq '.spec.installModes'
    ```
    ```json title="Example output"
    [
      {
        "type": "OwnNamespace",
        "supported": true
      },
      {
        "type": "SingleNamespace",
        "supported": true
      },
      {
        "type": "MultiNamespace",
        "supported": false
      },
      {
        "type": "AllNamespaces",
        "supported": false
      }
    ]
    ```

    In this example, the bundle supports both `OwnNamespace` and `SingleNamespace` modes. The `.spec.config.inline.watchNamespace` field is required and can match or differ from the `.spec.namespace` field.