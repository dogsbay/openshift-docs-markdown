{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing a single managed cluster {id="ztp-manually-install-a-single-managed-cluster_{{ context }}"}

You can manually deploy a single managed cluster using the assisted service and {{ rh_rhacm_first }}. {._abstract}

**Prerequisites**

*   You have installed the OpenShift CLI (`oc`).
*   You have logged in to the hub cluster as a user with `cluster-admin` privileges.
*   You have extracted the reference and example CRs from the `ztp-site-generate` container and you configured the `ClusterInstance` CR.
*   You have created the baseboard management controller (BMC) `Secret` and the image pull-secret `Secret` custom resources (CRs). See "Creating the managed bare-metal host secrets" for details.
*   Your target bare-metal host meets the networking and hardware requirements for managed clusters.

**Procedure**

1.  Create a `ClusterImageSet` for each specific cluster version to be deployed, for example `clusterImageSet-{{ product_version }}.yaml`{minja}. A `ClusterImageSet` has the following format:
    ```yaml {minja}
    apiVersion: hive.openshift.io/v1
    kind: ClusterImageSet
    metadata:
      name: openshift-{{ product_version }}.0
    spec:
       releaseImage: quay.io/openshift-release-dev/ocp-release:{{ product_version }}.0-x86_64
    ```

    where:

    `name`
    :   The descriptive version that you want to deploy.

    `releaseImage`
    :   Specifies the `releaseImage` to deploy and determines the operating system image version. The discovery ISO is based on the image version as set by `releaseImage`, or the latest version if the exact version is unavailable.
1.  Apply the `clusterImageSet` CR:
    ```terminal {minja}
    $ oc apply -f clusterImageSet-{{ product_version }}.yaml
    ```
1.  Create the `Namespace` CR in the `cluster-namespace.yaml` file:
    ```yaml
    apiVersion: v1
    kind: Namespace
    metadata:
         name: <cluster_name>
         labels:
            name: <cluster_name>
    ```

    where:

    `name`
    :   The name of the managed cluster to provision.
1.  Apply the `Namespace` CR by running the following command:
    ```terminal
    $ oc apply -f cluster-namespace.yaml
    ```
1.  Apply the `ClusterInstance` CR that you configured to the hub cluster by running the following command:
    ```terminal
    $ oc apply -f clusterinstance.yaml
    ```

    The SiteConfig Operator processes the `ClusterInstance` CR and automatically generates the required installation CRs, including `BareMetalHost`, `AgentClusterInstall`, `ClusterDeployment`, `InfraEnv`, and `NMStateConfig`. The assisted service then begins the cluster installation.