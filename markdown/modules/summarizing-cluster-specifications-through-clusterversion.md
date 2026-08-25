{%- set _mod_docs_content_type = "PROCEDURE" %}
# Summarizing cluster specifications by using a cluster version object {id="summarizing-cluster-specifications-through-clusterversion_{{ context }}"}

To verify your cluster version, check update history, and confirm component status, query the `clusterversion` resource. {._abstract}

**Prerequisites**

{% if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
*   You have access to the cluster as a user with the `cluster-admin` role.
{% endif %}
{% if openshift_rosa or openshift_rosa_hcp or openshift_dedicated %}
*   You have access to the cluster as a user with the `dedicated-admin` role.
{%- endif %}
*   You have installed the {{ oc_first }}.

**Procedure**

1.  Query cluster version, availability, uptime, and general status:
    ```terminal
    $ oc get clusterversion
    ```
    ```text title="Example output"
    NAME      VERSION   AVAILABLE   PROGRESSING   SINCE   STATUS
    version   4.13.8    True        False         8h      Cluster version is 4.13.8
    ```
1.  Obtain a detailed summary of cluster specifications, update availability, and update history:
    ```terminal
    $ oc describe clusterversion
    ```
    ```text title="Example output"
    Name:         version
    Namespace:
    Labels:       <none>
    Annotations:  <none>
    API Version:  config.openshift.io/v1
    Kind:         ClusterVersion
    # ...
        Image:    quay.io/openshift-release-dev/ocp-release@sha256:a956488d295fe5a59c8663a4d9992b9b5d0950f510a7387dbbfb8d20fc5970ce
        URL:      https://access.redhat.com/errata/RHSA-2023:4456
        Version:  4.13.8
      History:
        Completion Time:    2023-08-17T13:20:21Z
        Image:              quay.io/openshift-release-dev/ocp-release@sha256:a956488d295fe5a59c8663a4d9992b9b5d0950f510a7387dbbfb8d20fc5970ce
        Started Time:       2023-08-17T12:59:45Z
        State:              Completed
        Verified:           false
        Version:            4.13.8
    # ...
    ```