{%- set _mod_docs_content_type = "PROCEDURE" %}
# Starting the cluster update {id="update-starting-the-cluster-update_{{ context }}"}

When updating from one y-stream release to the next, you must ensure that the intermediate z-stream releases are also compatible. {._abstract}


:::note

You can verify that you are updating to a viable release by running the `oc adm upgrade` command.
The `oc adm upgrade` command lists the compatible update releases.

:::


**Procedure**

1.  Start the update:
    ```terminal
    $ oc adm upgrade --to=4.15.33
    ```


    :::important

    *   ***Control plane only update***: Ensure you point to the interim &lt;y+1> release path
    *   ***Y-stream update*** - Ensure you use the correct &lt;y.z> release that follows the Kubernetes [version skew policy](https://kubernetes.io/releases/version-skew-policy/).
    *   ***Z-stream update*** - Verify that there are no problems moving to that specific release
    
    :::


    ```terminal
    Requested update to <version>
    ```
   \
    where:
    `<version>`:: Specifies the version number for your particular update, such as `4.15.33`.