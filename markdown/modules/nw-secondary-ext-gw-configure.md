{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configure a secondary external gateway {id="nw-secondary-ext-gw-configure_{{ context }}"}

You can configure an external gateway on the default network for a namespace in your cluster. {._abstract}

**Prerequisites**

*   You installed the {{ oc_first }}.
*   You are logged in to the cluster with a user with `cluster-admin` privileges.

**Procedure**

1.  Create a YAML file that contains an `AdminPolicyBasedExternalRoute` object. For more information, see "AdminPolicyBasedExternalRoute object configuration".
1.  To create an admin policy based external route, enter the following command:
    ```terminal
    $ oc create -f <file>.yaml
    ```
    *   `<file>`: Specifies the name of the YAML file that you created in a previous step.
        ```text title="Example output"
        adminpolicybasedexternalroute.k8s.ovn.org/default-route-policy created
        ```
1.  To confirm that the admin policy based external route was created, enter the following command:
    ```terminal
    $ oc describe apbexternalroute <name> | tail -n 6
    ```
    *   `<name>`: Specifies the name of the `AdminPolicyBasedExternalRoute` object.
        ```text title="Example output"
        Status:
          Last Transition Time:  2023-04-24T15:09:01Z
          Messages:
          Configured external gateway IPs: 172.18.0.8
          Status:  Success
        Events:  <none>
        ```