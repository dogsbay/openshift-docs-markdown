{%- set _mod_docs_content_type = "SNIPPET" %}

You can verify that the feature gates are enabled by looking at the `kubelet.conf` file on a node after the nodes return to the ready state.

1.  From the **Administrator** perspective in the web console, navigate to **Compute** → **Nodes**.
1.  Select a node.
1.  In the **Node details** page, click **Terminal**.
1.  In the terminal window, change your root directory to `/host`:
    ```terminal
    sh-4.2# chroot /host
    ```
1.  View the `kubelet.conf` file:
    ```terminal
    sh-4.2# cat /etc/kubernetes/kubelet.conf
    ```
    ```terminal title="Sample output"
    # ...
    featureGates:
      InsightsOperatorPullingSCA: true,
      LegacyNodeRoleBehavior: false
    # ...
    ```

    The features that are listed as `true` are enabled on your cluster.

    :::note

    The features listed vary depending upon the {{ product_title }} version.
    
    :::