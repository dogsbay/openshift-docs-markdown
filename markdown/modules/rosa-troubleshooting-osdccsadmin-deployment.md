{%- set _mod_docs_content_type = "PROCEDURE" %}
# Troubleshooting cluster creation with an osdCcsAdmin error {id="rosa-troubleshooting-deployment-failure-osdccsadmin_{{ context }}"}

If a cluster creation action fails, you might receive the following error message. {._abstract}

The following example shows the output:

```terminal
Failed to create cluster: Unable to create cluster spec: Failed to get access keys for user 'osdCcsAdmin': NoSuchEntity: The user with name osdCcsAdmin cannot be found.
```

**Procedure**

1.  Delete the stack:
    ```terminal
    $ rosa init --delete
    ```
1.  Reinitialize your account:
    ```terminal
    $ rosa init
    ```