{%- set _mod_docs_content_type = "CONCEPT" %}
# Fencing validator script for non-disruptive checks {id="fencing-validator-script-for-non-disruptive-checks_{{ context }}"}

To ensure your two-node {{ product_title }} cluster with fencing (TNF) remains highly available without risking downtime, you can run the `fencing_validator` script in validation mode. This script performs a series of read-only health checks to verify cluster quorum, daemon health, and STONITH device status without disrupting active services. {._abstract}

The simplest way to run the script is from a debug session on either control plane node by running the following command:

```terminal
$ oc debug node/<node_name> --chroot /host /usr/local/bin/fencing_validator
```

This command does not reboot or fence any nodes. These checks are read-only and safe to run at any time. They run the following non-disruptive checks and report the results:

1.  **OpenShift version check** - Confirms the cluster is running {{ product_title }} 4.20.0 or later.
1.  **Node count check** - Confirms exactly 2 control-plane nodes exist.
1.  **Transport connectivity** - Establishes a connection to both nodes (via SSH or `oc debug`).
1.  **STONITH device check** - Verifies that STONITH devices are present and enabled in Pacemaker.
1.  **Pacemaker status** - Confirms both nodes are reporting ONLINE in the Pacemaker cluster.
1.  **Daemon health** - Checks that `corosync`, `pacemaker`, and `pcsd` services are active on both nodes.
1.  **etcd quorum** - Verifies that etcd has 2 healthy voting members and the cluster has quorum.
1.  **Fencing secrets** - Confirms that the fencing credential secrets (used by STONITH to authenticate to the BMC/IPMI) exist and are correctly bound to each node.

    When all non-disruptive checks pass, the output resembles the following:

    ```terminal
    [INFO]
    ====
    OpenShift version: 4.20.0 - OK [INFO]  Detected 2 control-plane nodes [INFO]  Transport: ssh [OK]    STONITH devices found and enabled [OK]    Both nodes ONLINE in Pacemaker [OK]    All daemons healthy on both nodes [OK]    etcd quorum healthy (2/2 voters) [OK]    Fencing secrets correctly bound [INFO]  All non-disruptive checks passed When something fails:
    ====
    ```

    When non-disruptive checks fail, the output resembles the following:

    ```terminal
    [INFO]
    ====
    OpenShift version: 4.20.0 - OK [INFO]  Detected 2 control-plane nodes [INFO]  Transport: ssh [ERROR] No STONITH devices found - fencing is not configured
    ====
    ```