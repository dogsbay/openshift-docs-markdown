{%- set _mod_docs_content_type = "PROCEDURE" %}
# Impersonating the system:admin group {id="impersonation-system-admin-group_{{ context }}"}

To impersonate a user who has cluster administration privileges through group membership, you must specify both the user and the associated groups in the impersonation command. {._abstract}

**Procedure**

*   To grant a user permission to impersonate a `system:admin` by impersonating the associated cluster administration groups,
run the following command:
    ```terminal
    $ oc create clusterrolebinding <any_valid_name> --clusterrole=sudoer --as=<user> \
    --as-group=<group1> --as-group=<group2>
    ```