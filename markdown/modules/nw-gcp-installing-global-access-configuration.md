{%- set _mod_docs_content_type = "PROCEDURE" %}
# Create an Ingress Controller with global access on {{ gcp_short }} {id="nw-gcp-global-access-configuration_{{ context }}"}

You can create an Ingress Controller that has global access to a {{ gcp_first }} cluster. Global access is only available to Ingress Controllers using internal load balancers.

**Prerequisites**

*   You created the `install-config.yaml` and complete any modifications to it.

**Procedure**

Create an Ingress Controller with global access on a new {{ gcp_short }} cluster.

1.  Change to the directory that contains the installation program and create a manifest file:
    ```terminal
    $ ./openshift-install create manifests --dir <installation_directory> (1)
    ```
    1.  For `<installation_directory>`, specify the name of the directory that
    contains the `install-config.yaml` file for your cluster.
1.  Create a file that is named `cluster-ingress-default-ingresscontroller.yaml` in the `<installation_directory>/manifests/` directory:
    ```terminal
    $ touch <installation_directory>/manifests/cluster-ingress-default-ingresscontroller.yaml (1)
    ```
    1.  For `<installation_directory>`, specify the directory name that contains the
    `manifests/` directory for your cluster.

        After creating the file, several network configuration files are in the
        `manifests/` directory, as shown:
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
                clientAccess: Global (1)
              type: GCP
            scope: Internal          (2)
          type: LoadBalancerService
    ```
    1.  Set `gcp.clientAccess` to `Global`.
    1.  Global access is only available to Ingress Controllers using internal load balancers.