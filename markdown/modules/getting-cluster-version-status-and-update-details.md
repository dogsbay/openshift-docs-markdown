{%- set _mod_docs_content_type = "PROCEDURE" %}
# Getting cluster version, status, and update details {id="getting-cluster-version-and-update-details_{{ context }}"}

You can view the cluster version and status by running the `oc get clusterversion` command. If the status shows that the installation is still progressing, you can review the status of the Operators for more information. {._abstract}

You can also list the current update channel and review the available cluster updates.

**Prerequisites**

*   You have access to the cluster as a user with the `cluster-admin` role.
*   You have installed the {{ oc_first }}.

**Procedure**

1.  Obtain the cluster version and overall status:
    ```terminal
    $ oc get clusterversion
    ```
    ```terminal title="Example output"
    NAME      VERSION   AVAILABLE   PROGRESSING   SINCE   STATUS
    version   4.6.4     True        False         6m25s   Cluster version is 4.6.4
    ```

    The example output indicates that the cluster has been installed successfully.
1.  If the cluster status indicates that the installation is still progressing, you can obtain more detailed progress information by checking the status of the Operators:
    ```terminal
    $ oc get clusteroperators.config.openshift.io
    ```
1.  View a detailed summary of cluster specifications, update availability, and update history:
    ```terminal
    $ oc describe clusterversion
    ```
1.  List the current update channel:
    ```terminal
    $ oc get clusterversion -o jsonpath='{.items[0].spec}{"\n"}'
    ```
    ```terminal title="Example output"
    {"channel":"stable-4.6","clusterID":"245539c1-72a3-41aa-9cec-72ed8cf25c5c"}
    ```
1.  Review the available cluster updates:
    ```terminal
    $ oc adm upgrade
    ```
    ```terminal title="Example output"
    Cluster version is 4.6.4

    Updates:

    VERSION IMAGE
    4.6.6   quay.io/openshift-release-dev/ocp-release@sha256:c7e8f18e8116356701bd23ae3a23fb9892dd5ea66c8300662ef30563d7104f39
    ```