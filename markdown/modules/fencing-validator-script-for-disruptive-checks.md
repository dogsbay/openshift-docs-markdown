{%- set _mod_docs_content_type = "CONCEPT" %}
# Fencing validator script for disruptive checks {id="fencing-validator-script-for-disruptive-checks_{{ context }}"}

You can validate your cluster’s resilience and perform disruptive checks from a peer node by using the `fencing_validator` script. By executing these simulated failures, you can ensure your high-availability environment correctly isolates and recovers from errors. {._abstract}

You can trigger the Shoot The Other Node In The Head (STONITH) action for the failed node and cut off its access to shared resources and prevent data corruption by running the following command: 

```terminal
$ pcs stonith fence <node>
```

You can check whether a two-node {{ product_title }} cluster with fencing (TNF) setup actually works by running the following command: 

```terminal
$ oc debug node/<node_name> --chroot /host /usr/local/bin/fencing_validator --disruptive
```


:::warning

The `--disruptive` flag fences each control plane node one at a time and verifies recovery. The `--disruptive` flag performs the STONITH fence operations such as power cycle or VM reset. It does not perform graceful shutdown, and causes temporary workload disruption.

:::


The fencing validator script with `--disruptive` flag runs the following checks: 

1.  **Fence Node A** - Triggers STONITH to reboot the first control-plane node.
1.  **Verify NotReady** - Waits for Kubernetes to report the node A as `NotReady`, which confirms the reboot happened.
1.  **Verify recovery** - Waits for the node A to come back to the `Ready` state, rejoin the Pacemaker cluster as `ONLINE`, and for etcd to regain quorum.
1.  **Post-recovery daemon check** - Re-checks all daemons are healthy after recovery.
1.  **Fence Node B** - Triggers STONITH to reboot the second node.
1.  . **Verify NotReady** - Waits for Kubernetes to report the node B as `NotReady`, which confirms the reboot happened.
1.  **Verify recovery** - Waits for the node B to come back to the `Ready` state, rejoin the Pacemaker cluster as `ONLINE`, and for etcd to regain quorum.
1.  **Post-recovery daemon check** - Re-checks all daemons are healthy after recovery.