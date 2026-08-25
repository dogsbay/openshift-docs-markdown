{%- set _mod_docs_content_type = "PROCEDURE" %}
# Preparing for multiple instances of an Operator for multitenant clusters {id="olm-preparing-operators-multitenant_{{ context }}"}

To provide separate Operator instances for each tenant in a multitenant {{ product_title }} cluster, you can install multiple instances of the same Operator in dedicated namespaces. {._abstract}

In the following procedure, the _tenant_ is a user or group of users that share common access and privileges for a set of deployed workloads. The _tenant Operator_ is the instance of an Operator that is intended for use by only that tenant.

**Prerequisites**

{% if openshift_dedicated or openshift_rosa or openshift_rosa_hcp %}
*   You have access to the cluster as a user with the `dedicated-admin` role.
{%- endif %}
*   All instances of the Operator you want to install must be the same version across a given cluster.

    :::important

    For more information on this and other limitations, see "Operators in multitenant clusters".
    
    :::


**Procedure**

{%- if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}
1.  Before installing the Operator, create a namespace for the tenant Operator that is separate from the tenant’s namespace. For example, if the tenant’s namespace is `team1`, you might create a `team1-operator` namespace:
    1.  Define a `Namespace` resource and save the YAML file, for example, `team1-operator.yaml`:
        ```yaml
        apiVersion: v1
        kind: Namespace
        metadata:
          name: team1-operator
        ```
    1.  Create the namespace by running the following command:
        ```terminal
        $ oc create -f team1-operator.yaml
        ```
{%- endif %}
{%- if openshift_dedicated or openshift_rosa or openshift_rosa_hcp %}
1.  Before installing the Operator, create a namespace for the tenant Operator that is separate from the tenant’s namespace. You can do this by creating a project. For example, if the tenant’s namespace is `team1`, you might create a `team1-operator` project:
    ```terminal
    $ oc new-project team1-operator
    ```
{%- endif %}
1.  Create an Operator group for the tenant Operator scoped to the tenant’s namespace, with only that one namespace entry in the `spec.targetNamespaces` list:
    1.  Define an `OperatorGroup` resource and save the YAML file, for example, `team1-operatorgroup.yaml`:
        ```yaml
        apiVersion: operators.coreos.com/v1
        kind: OperatorGroup
        metadata:
          name: team1-operatorgroup
          namespace: team1-operator
        spec:
          targetNamespaces:
          - team1
        ```

        Define only the tenant’s namespace in the `spec.targetNamespaces` list.
    1.  Create the Operator group by running the following command:
        ```terminal
        $ oc create -f team1-operatorgroup.yaml
        ```