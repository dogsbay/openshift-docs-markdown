{%- set _mod_docs_content_type = "PROCEDURE" %}
# Updating {{ lvms }} {id="lvms-updating-lvms_{{ context }}"}

You can update {{ lvms }} to ensure compatibility with the {{ product_title }} version after upgrading your cluster. {._abstract}


:::note

The default namespace for the {{ lvms }} Operator is `openshift-lvm-storage`.

:::


**Prerequisites**

*   You have updated your {{ product_title }} cluster.
*   You have installed a previous version of {{ lvms }}.
*   You have installed the OpenShift CLI (`oc`).
*   You have access to the cluster using an account with `cluster-admin` permissions.

**Procedure**

1.  Log in to the OpenShift CLI (`oc`).
1.  Update the `Subscription` custom resource (CR) that you created while installing {{ lvms }} by running the following command:
    ```terminal
    $ oc patch subscription lvms-operator -n openshift-lvm-storage --type merge --patch '{"spec":{"channel":"<update_channel>"}}'
    ```

    Replace `<update_channel>` with the version of {{ lvms }} that you want to install. For example, `stable-{{ product_version }}`.
1.  View the update events to check that the installation is complete by running the following command:
    ```terminal
    $ oc get events -n openshift-lvm-storage
    ```
    ```terminal title="Example output"
    ...
    8m13s       Normal    RequirementsUnknown   clusterserviceversion/lvms-operator.v{{ product_version }}   requirements not yet checked
    8m11s       Normal    RequirementsNotMet    clusterserviceversion/lvms-operator.v{{ product_version }}   one or more requirements couldn't be found
    7m50s       Normal    AllRequirementsMet    clusterserviceversion/lvms-operator.v{{ product_version }}   all requirements found, attempting install
    7m50s       Normal    InstallSucceeded      clusterserviceversion/lvms-operator.v{{ product_version }}   waiting for install components to report healthy
    7m49s       Normal    InstallWaiting        clusterserviceversion/lvms-operator.v{{ product_version }}   installing: waiting for deployment lvms-operator to become ready: deployment "lvms-operator" waiting for 1 outdated replica(s) to be terminated
    7m39s       Normal    InstallSucceeded      clusterserviceversion/lvms-operator.v{{ product_version }}   install strategy completed with no errors
    ...
    ```

**Verification**

*   Verify the {{ lvms }} version by running the following command:
    ```terminal
    $ oc get subscription lvms-operator -n openshift-lvm-storage -o jsonpath='{.status.installedCSV}'
    ```
    ```terminal title="Example output"
    lvms-operator.v{{ product_version }}
    ```