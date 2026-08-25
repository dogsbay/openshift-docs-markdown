{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating {{ SMProductShortName }} control plane profiles {id="ossm-control-plane-profiles_{{ context }}"}

You can create reusable configurations with `ServiceMeshControlPlane` profiles. Individual users can extend the profiles they create with their own configurations. Profiles can also inherit configuration information from other profiles. For example, you can create an accounting control plane for the accounting team and a marketing control plane for the marketing team. If you create a development template and a production template, members of the marketing team and the accounting team can extend the development and production profiles with team-specific customization.

When you configure {{ SMProductShortName }} control plane profiles, which follow the same syntax as the `ServiceMeshControlPlane`, users inherit settings in a hierarchical fashion. The Operator is delivered with a `default` profile with default settings for {{ SMProductName }}.

## Creating the ConfigMap {id="ossm-create-configmap_{{ context }}"}

To add custom profiles, you must create a `ConfigMap` named `smcp-templates` in the `openshift-operators` project. The Operator container automatically mounts the `ConfigMap`.

**Prerequisites**

*   An installed, verified {{ SMProductShortName }} Operator.
*   An account with the `cluster-admin` role. If you use {{ product_dedicated }}, you must have an account with the `dedicated-admin` role.
*   Location of the Operator deployment.
*   Access to the OpenShift CLI (`oc`).

**Procedure**

1.  Log in to the {{ product_title }} CLI as a `cluster-admin`. If you use {{ product_dedicated }}, you must have an account with the `dedicated-admin` role.
1.  From the CLI, run this command to create the ConfigMap named `smcp-templates` in the `openshift-operators` project and replace `<profiles-directory>` with the location of the `ServiceMeshControlPlane` files on your local disk:
    ```terminal
    $ oc create configmap --from-file=<profiles-directory> smcp-templates -n openshift-operators
    ```
1.  You can use the `profiles` parameter in the `ServiceMeshControlPlane` to specify one or more templates.
    ```yaml
      apiVersion: maistra.io/v2
      kind: ServiceMeshControlPlane
      metadata:
        name: basic
      spec:
        profiles:
        - default
    ```