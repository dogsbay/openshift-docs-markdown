{%- set _mod_docs_content_type = "PROCEDURE" %}
# Create an Ingress Controller with global access on {{ gcp_short }} {id="nw-gcp-global-access-configuration_{{ context }}"}

You can create an Ingress Controller that has global access to a {{ gcp_first }} cluster, which allows clients from any region to reach your cluster’s internal load balancer. Global access is available only to Ingress Controllers that use internal load balancers. {._abstract}

**Prerequisites**

*   You created the `install-config.yaml` and complete any modifications to it.

**Procedure**

1.  Change to the directory that contains the installation program and create a manifest file:
    ```terminal
    $ ./openshift-install create manifests --dir <installation_directory>
    ```

    For `_<installation_directory>_`, specify the name of the directory that contains the `install-config.yaml` file for your cluster.
1.  Create a file that is named `cluster-ingress-default-ingresscontroller.yaml` in the `<installation_directory>/manifests/` directory:
    ```terminal
    $ touch <installation_directory>/manifests/cluster-ingress-default-ingresscontroller.yaml
    ```

    For `_<installation_directory>_`, specify the directory name that contains the `manifests/` directory for your cluster.

    After creating the file, several network configuration files are in the `manifests/` directory, as shown:
    ```terminal
    $ ls <installation_directory>/manifests/cluster-ingress-default-ingresscontroller.yaml
    ```
    ```terminal title="Example output"
    cluster-ingress-default-ingresscontroller.yaml
    ```
1.  Open the `cluster-ingress-default-ingresscontroller.yaml` file in an editor and enter a custom resource (CR) that describes the Operator configuration you want:
    ```yaml title="Sample clientAccess configuration to Global"
      apiVersion: operator.openshift.io/v1
      kind: IngressController
      metadata:
        name: default
        namespace: openshift-ingress-operator
      spec:
        endpointPublishingStrategy:
          loadBalancer:
            providerParameters:
              gcp:
                clientAccess: Global
              type: GCP
            scope: Internal
          type: LoadBalancerService
    ```
    *   `gcp.clientAccess` is set to `Global` to provide global access for the Ingress Controller.
    *   `scope` is set to `Internal` because global access is available only to Ingress Controllers that use internal load balancers.