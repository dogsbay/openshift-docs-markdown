{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring an Ingress Controller Network Load Balancer on a new AWS cluster {id="nw-aws-nlb-new-cluster_{{ context }}"}

You can create an Ingress Controller backed by an {{ aws_full }} Network Load Balancer (NLB) on a new cluster in situations where you need more transparent networking capabilities. {._abstract}

**Prerequisites**

*   Create and edit the `install-config.yaml` file. For instructions, see "Creating the installation configuration file" in the _Additonal resources_ section. 

**Procedure**

1.  Change to the directory that contains the installation program and create the manifests:
    ```terminal
    $ ./openshift-install create manifests --dir <installation_directory>
    ```
    *   For `<installation_directory>`, specify the name of the directory that contains the `install-config.yaml` file for your cluster.
1.  Create a file that is named `cluster-ingress-default-ingresscontroller.yaml` in the `<installation_directory>/manifests/` directory:
    ```terminal
    $ touch <installation_directory>/manifests/cluster-ingress-default-ingresscontroller.yaml
    ```

    `<installation_directory>`
    :   Specifies the directory name that contains the `manifests/` directory for your cluster.

1.  Check the several network configuration files that exist in the `manifests/` directory by entering the following command:
    ```terminal
    $ ls <installation_directory>/manifests/cluster-ingress-default-ingresscontroller.yaml
    ```
    ```terminal title="Example output"
    cluster-ingress-default-ingresscontroller.yaml
    ```
1.  Open the `cluster-ingress-default-ingresscontroller.yaml` file in an editor and enter a custom resource (CR) that describes the Operator configuration you want:
    ```yaml
    apiVersion: operator.openshift.io/v1
    kind: IngressController
    metadata:
      creationTimestamp: null
      name: default
      namespace: openshift-ingress-operator
    spec:
      endpointPublishingStrategy:
        loadBalancer:
          scope: External
          providerParameters:
            type: AWS
            aws:
              type: NLB
        type: LoadBalancerService
    ```
1.  Save the `cluster-ingress-default-ingresscontroller.yaml` file and quit the text editor.
1.  Optional: Back up the `manifests/cluster-ingress-default-ingresscontroller.yaml` file because the installation program deletes the `manifests/` directory during cluster creation.