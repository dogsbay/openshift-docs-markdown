{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating an EgressFirewall custom resource (CR) {id="nw-egress-firewall-policy-create_{{ context }}"}

As a cluster administrator, you can create an egress firewall policy object for a project. {._abstract}


:::important

If the project already has an `EgressFirewall` resource, you must edit the existing policy to make changes to egress firewall rules.

:::


**Prerequisites**

*   A cluster that uses the OVN-Kubernetes network plugin.
*   Install the OpenShift CLI (`oc`).
*   You must log in to the cluster as a cluster administrator.

**Procedure**

1.  Create a policy rule:
    1.  Create a `<policy_name>.yaml` file where `<policy_name>` describes the egress
    policy rules.
    1.  Define the `EgressFirewall` object in the file.
1.  Create the policy object by entering the following command. Replace `<policy_name>` with the name of the policy and `<project>` with the project that the rule applies to.
    ```terminal
    $ oc create -f <policy_name>.yaml -n <project>
    ```

    Successful output lists the `egressfirewall.k8s.ovn.org/v1` name and the `created` status.
1.  Optional: Save the `<policy_name>.yaml` file so that you can make changes later.