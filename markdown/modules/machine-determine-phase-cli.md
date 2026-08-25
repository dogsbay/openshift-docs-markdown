{%- set _mod_docs_content_type = "PROCEDURE" %}
# Determining the phase of a machine by using the CLI {id="machine-determine-phase-cli_{{ context }}"}

To troubleshoot issues with a machine, you can find the phase of a machine by using the {{ oc_first }}. {._abstract}

**Prerequisites**

*   You have access to an {{ product_title }} cluster using an account with `cluster-admin` permissions.
*   You have installed the `oc` CLI.

**Procedure**

*   List the machines on the cluster by running the following command:
    ```terminal
    $ oc get machine -n openshift-machine-api
    ```
    ```text title="Example output"
    NAME                                      PHASE     TYPE         REGION      ZONE         AGE
    mycluster-5kbsp-master-0                  Running   m6i.xlarge   us-west-1   us-west-1a   4h55m
    mycluster-5kbsp-master-1                  Running   m6i.xlarge   us-west-1   us-west-1b   4h55m
    mycluster-5kbsp-master-2                  Running   m6i.xlarge   us-west-1   us-west-1a   4h55m
    mycluster-5kbsp-worker-us-west-1a-fmx8t   Running   m6i.xlarge   us-west-1   us-west-1a   4h51m
    mycluster-5kbsp-worker-us-west-1a-m889l   Running   m6i.xlarge   us-west-1   us-west-1a   4h51m
    mycluster-5kbsp-worker-us-west-1b-c8qzm   Running   m6i.xlarge   us-west-1   us-west-1b   4h51m
    ```

    The `PHASE` column of the output contains the phase of each machine.