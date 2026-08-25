{%- set _mod_docs_content_type = "PROCEDURE" %}
# Migrating control plane or infra machine sets between architectures on {{ gcp_full }} {id="multiarch-migrating-cp-infra-gcp_{{ context }}"}

You can migrate the control plane or infra machine sets in your {{ gcp_short }} cluster between `x86` and `arm64` architectures. {._abstract}

**Prerequisites**

*   You have installed the {{ oc_first }}.
*   You logged in to `oc` as a user with `cluster-admin` privileges.

**Procedure**

1.  Check the architecture of the control plane or infra nodes by running the following command:
    ```terminal
    $ oc get nodes -o wide
    ```
    ```terminal title="Example output"
    NAME                          STATUS   ROLES                  AGE    VERSION   INTERNAL-IP EXTERNAL-IP   OS-IMAGE                                         KERNEL-VERSION                 CONTAINER-RUNTIME
    worker-001.example.com        Ready    infra                  100d   v1.30.7   10.x.x.x    <none>        Red Hat Enterprise Linux CoreOS 4xx.xx.xxxxx-0   5.x.x-xxx.x.x.el9_xx.x86_64    cri-o://1.30.x
    master-001.example.com        Ready    control-plane,master   120d   v1.30.7   10.x.x.x    <none>        Red Hat Enterprise Linux CoreOS 4xx.xx.xxxxx-0   5.x.x-xxx.x.x.el9_xx.x86_64    cri-o://1.30.x
    ```

    The `KERNEL-VERSION` field in the output indicates the architecture of the nodes.
1.  Check that your cluster uses the multi payload by running the following command:
    ```terminal
    $ oc adm release info -o jsonpath="{ .metadata.metadata}"
    ```

    If you see the following output, the cluster is multi-architecture compatible.
    ```terminal
    {
     "release.openshift.io/architecture": "multi",
     "url": "https://access.redhat.com/errata/<errata_version>"
    }
    ```

    If the cluster is not using the multi payload, migrate the cluster to a multi-architecture cluster. For more information, see "Migrating to a cluster with multi-architecture compute machines".
1.  If you use any custom image streams, update them from single-architecture to multi-architecture by running the following command for each image stream:
{% include "./snippets/update-image-stream-to-multi-arch.md" %}
1.  Select an instance type that matches the target architecture from [General-purpose machine family for Compute engine](https://cloud.google.com/compute/docs/general-purpose-machines) (Google documentation). Check the [Available regions and zones](https://cloud.google.com/compute/docs/regions-zones#available) table (Google documentation) to verify that the instance type is supported in your zone.
1.  Select a supported disk type for the instance type that you selected from the "Supported disk types" section of [General-purpose machine family for Compute engine](https://cloud.google.com/compute/docs/general-purpose-machines) (Google documentation).
1.  Determine the {{ gcp_short }} image that the machine set uses after migration by running the following command:
    ```terminal
    $ oc get configmap/coreos-bootimages \
      -n openshift-machine-config-operator \
      -o jsonpath='{.data.stream}' | jq \
      -r '.architectures.aarch64.images.gcp'
    ```
    ```terminal title="Example output"
    "gcp": {
        "release": "415.92.202309142014-0",
        "project": "rhcos-cloud",
        "name": "rhcos-415-92-202309142014-0-gcp-aarch64"
      }
    ```

    Use the `project` and `name` parameters from the output to form the `image` parameter in the following format: `projects/<project>/global/images/<name>`.
1.  To migrate the control plane to another architecture, run the following command:
    ```terminal
    $ oc edit controlplanemachineset.machine.openshift.io cluster -n openshift-machine-api
    ```
    1.  Replace the `disks.type` parameter with the disk type that you selected.
    1.  Replace the `disks.image` parameter with the `image` parameter that you formed previously.
    1.  Replace the `machineType` parameter with the instance type that you selected.
1.  To migrate an infra machine set to another architecture, run the following command using the ID of an infra machine set:
    ```terminal
    $ oc edit machineset <infra-machine-set_id> -n openshift-machine-api
    ```
    1.  Replace the `disks.type` parameter with the disk type that you selected.
    1.  Replace the `disks.image` parameter with the `image` parameter that you formed previously.
    1.  Replace the `machineType` parameter with the instance type that you selected.