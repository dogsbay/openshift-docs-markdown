{%- set _mod_docs_content_type = "PROCEDURE" %}
# Resolving a fencing failure in TNF {id="resolving-a-fencing-failure-in-tnf_{{ context }}"}

You must manually intervene when a cluster cannot automatically fence a failed node. Use the following procedure to safely power off the unresponsive hardware and clear the `UNCLEAN (offline)` state to allow the surviving node to resume cluster operations. {._abstract}

If the `pcs status` command shows the failed node as `UNCLEAN (offline)`, the automated fencing sequence did not succeed, and manual recovery is required.

**Procedure**

1.  Verify that the failed node is powered off using the BMC console or physical inspection.
1.  Confirm the fencing manually by running the following command:
    ```terminal
    $ oc debug node/<surviving-node> -- chroot /host pcs stonith confirm <failed_node_name> --force
    ```