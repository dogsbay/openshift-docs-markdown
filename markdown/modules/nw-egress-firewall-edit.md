{%- set _mod_docs_content_type = "PROCEDURE" %}
# Editing an EgressFirewall custom resource (CR) {id="nw-egress-firewall-edit_{{ context }}"}

As a cluster administrator, you can update the egress firewall for a project. {._abstract}

**Prerequisites**

*   A cluster using the OVN-Kubernetes network plugin.
*   Install the OpenShift CLI (`oc`).
*   You must log in to the cluster as a cluster administrator.

**Procedure**

1.  Find the name of the `EgressFirewall` CR for the project. Replace `<project>` with the name of the project.
    ```terminal
    $ oc get -n <project> egressfirewall
    ```
1.  Optional: If you did not save a copy of the `EgressFirewall` object when you created the egress network firewall, enter the following command to create a copy.
    ```terminal
    $ oc get -n <project> egressfirewall <name> -o yaml > <filename>.yaml
    ```

    Replace `<project>` with the name of the project. Replace `<name>` with the name of the object. Replace `<filename>` with the name of the file to save the YAML to.
1.  After making changes to the policy rules, enter the following command to replace the `EgressFirewall` CR. Replace `<filename>` with the name of the file containing the updated `EgressFirewall` CR.
    ```terminal
    $ oc replace -f <filename>.yaml
    ```