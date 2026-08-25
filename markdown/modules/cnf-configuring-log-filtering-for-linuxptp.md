{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring log filtering for PTP {id="cnf-configuring-log-filtering-for-linuxptp_{{ context }}"}

Modify the `PtpConfig` custom resource (CR) to configure basic log filtering and exclude log messages that report the master offset value. {._abstract}

**Prerequisites**

*   Install the OpenShift CLI (`oc`).
*   Log in as a user with `cluster-admin` privileges.
*   Install the PTP Operator.

**Procedure**

1.  Edit the `PtpConfig` CR:
    ```terminal
    $ oc edit PtpConfig -n openshift-ptp
    ```
1.  In `spec.profile`, add the `ptpSettings.logReduce` specification and set the value to `true`:
    ```yaml
    apiVersion: ptp.openshift.io/v1
    kind: PtpConfig
    metadata:
      name: <ptp_config_name>
      namespace: openshift-ptp
    ...
    spec:
      profile:
      - name: "profile1"
    ...
        ptpSettings:
          logReduce: "true"
    ```

    :::note

    For debugging purposes, you can revert this specification to `False` to include the master offset messages.
    
    :::

1.  Save and exit to apply the changes to the `PtpConfig` CR.

**Verification**

1.  Get the name of the `linuxptp-daemon` pod and corresponding node where the `PtpConfig` CR has been applied:
    ```terminal
    $ oc get pods -n openshift-ptp -o wide
    ```
    ```terminal title="Example output"
    NAME                            READY   STATUS    RESTARTS   AGE     IP            NODE
    linuxptp-daemon-gmv2n           3/3     Running   0          1d17h   10.1.196.24   compute-0.example.com
    linuxptp-daemon-lgm55           3/3     Running   0          1d17h   10.1.196.25   compute-1.example.com
    ptp-operator-3r4dcvf7f4-zndk7   1/1     Running   0          1d7h    10.129.0.61   control-plane-1.example.com
    ```
1.  Verify that master offset messages are excluded from the logs by running the following command:
    ```terminal
    $ oc -n openshift-ptp logs <linux_daemon_container> -c linuxptp-daemon-container | grep "master offset"
    ```
    *   `<linux_daemon_container>` is the name of the `linuxptp-daemon` pod, for example `linuxptp-daemon-gmv2n`.

        When you configure the `logReduce` specification, this command does not report any instances of `master offset` in the logs of the `linuxptp` daemon.