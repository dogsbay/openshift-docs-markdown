{%- set _mod_docs_content_type = "PROCEDURE" %}
# Restoring the network {id="connected-to-disconnected-restore_{{ context }}"}

If you want to reconnect a disconnected cluster and pull images from online registries, delete the cluster’s ImageContentSourcePolicy (ICSP) objects. Without the ICSP, pull requests to external registries are no longer redirected to the mirror registry. {._abstract}

**Procedure**

1.  View the ICSP objects in your cluster:
    ```terminal
    $ oc get imagecontentsourcepolicy
    ```
    ```terminal title="Example output"
    NAME                 AGE
    mirror-ocp           6d20h
    ocp4-index-0         6d18h
    qe45-index-0         6d15h
    ```
1.  Delete all the ICSP objects you created when disconnecting your cluster:
    ```terminal
    $ oc delete imagecontentsourcepolicy <icsp_name> <icsp_name> <icsp_name>
    ```

    For example:
    ```terminal
    $ oc delete imagecontentsourcepolicy mirror-ocp ocp4-index-0 qe45-index-0
    ```
    ```terminal title="Example output"
    imagecontentsourcepolicy.operator.openshift.io "mirror-ocp" deleted
    imagecontentsourcepolicy.operator.openshift.io "ocp4-index-0" deleted
    imagecontentsourcepolicy.operator.openshift.io "qe45-index-0" deleted
    ```
1.  Wait for all the nodes to restart and return to the READY status and verify that the `registries.conf` file is pointing to the original registries and not the mirror registries:
    1.  Log in to a node:
        ```terminal
        $ oc debug node/<node_name>
        ```
    1.  Set `/host` as the root directory within the debug shell:
        ```terminal
        sh-4.4# chroot /host
        ```
    1.  Examine the `registries.conf` file:
        ```terminal
        sh-4.4# cat /etc/containers/registries.conf
        ```
        ```terminal title="Example output"
        unqualified-search-registries = ["registry.access.redhat.com", "docker.io"]
        ```

        The `registry` and `registry.mirror` entries created by the ICSPs you deleted are removed.