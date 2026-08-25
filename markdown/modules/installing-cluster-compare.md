{%- set _mod_docs_content_type = "CONCEPT" %}

# Installing the cluster-compare plugin {id="installing-cluster-compare_{{ context }}"}

Install the `cluster-compare` plugin to compare a reference configuration with a cluster configuration from a live cluster or `must-gather` data. {._abstract}

**Prerequisites**

1.  You have installed the OpenShift CLI (`oc`).
1.  You installed `podman`.
1.  You have access to the Red Hat container catalog.

**Procedure**

1.  Log in to the Red Hat container catalog by running the following command:
    ```terminal
    $ podman login registry.redhat.io
    ```
1.  Create a container for the `cluster-compare` image by running the following command:
    ```terminal
    $ podman create --name cca registry.redhat.io/openshift4/kube-compare-artifacts-rhel9:latest
    ```
1.  Copy the `cluster-compare` plugin to a directory that is included in your `PATH` environment variable by running the following command:
    ```terminal
    $ podman cp cca:/usr/share/openshift/<arch>/kube-compare.<rhel_version> <directory_on_path>/kubectl-cluster_compare
    ```
    *   `arch` is the architecture for your machine. Valid values are:
        *   `linux_amd64`
        *   `linux_arm64`
        *   `linux_ppc64le`
        *   `linux_s390x`
    *   `<rhel_version>` is the version of {{ op_system_base }} on your machine. Valid values are `rhel8` or `rhel9`.
    *   `<directory_on_path>` is the path to a directory included in your `PATH` environment variable.

**Verification**

*   View the help for the plugin by running the following command:
    ```terminal
    $ oc cluster-compare -h
    ```

    The following is example output:
    ```terminal
    Compare a known valid reference configuration and a set of specific cluster configuration CRs.

    ...

    Usage:
      compare -r <Reference File>

    Examples:
      # Compare a known valid reference configuration with a live cluster:
      kubectl cluster-compare -r ./reference/metadata.yaml

     ...
    ```