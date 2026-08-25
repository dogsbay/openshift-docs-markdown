{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring the ovnKubernetesConfig object fails with an error {id="hcp-ts-ovnkubernetes_{{ context }}"}

When you try to configure the `ovnKubernetesConfig` object on a hosted cluster by using a different network type, such as `OpenShiftSDN`, an error occurs because {{ hcp }} works only with the `OVNKubernetes` network type. {._abstract}

**Procedure**

*   Verify the network type of your hosted cluster by entering the following command:
    ```terminal
    $ oc get hostedcluster <hosted_cluster_name> -n <hosted_control_plane_namespace> \
      -o jsonpath='{.spec.networking.networkType}'
    ```