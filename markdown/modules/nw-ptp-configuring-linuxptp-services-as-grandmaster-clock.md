{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring linuxptp services as a grandmaster clock {id="configuring-linuxptp-services-as-grandmaster-clock_{{ context }}"}

You can configure the `linuxptp` services (`ptp4l`, `phc2sys`, `ts2phc`) as grandmaster clock (T-GM) by creating a `PtpConfig` custom resource (CR) that configures the host NIC. {._abstract}

The `ts2phc` utility allows you to synchronize the system clock with the PTP grandmaster clock so that the node can stream precision clock signal to downstream PTP ordinary clocks and boundary clocks.


:::note

Use the following example `PtpConfig` CR as the basis to configure `linuxptp` services as T-GM for an Intel Westport Channel E810-XXVDA4T network interface.

To configure PTP fast events, set appropriate values for `ptp4lOpts`, `ptp4lConf`, and `ptpClockThreshold`.
`ptpClockThreshold` is used only when events are enabled.
See "Configuring the PTP fast event notifications publisher" for more information.

**Prerequisites**

*   For T-GM clocks in production environments, install an Intel E810 Westport Channel NIC in the bare-metal cluster host.
*   Install the OpenShift CLI (`oc`).
*   Log in as a user with `cluster-admin` privileges.
*   Install the PTP Operator.

**Procedure**

1.  Create the `PtpConfig` CR. For example:
    1.  Depending on your requirements, use one of the following T-GM configurations for your deployment.
    Save the YAML in the `grandmaster-clock-ptp-config.yaml` file:
        ```yaml
{% include "./snippets/ptp_PtpConfigGmWpc.yaml" %}
        ```

        :::note

        For E810 Westport Channel NICs, set the value for `ts2phc.nmea_serialport` to `/dev/gnss0`.
        
        :::

    1.  Create the CR by running the following command:
        ```terminal
        $ oc create -f grandmaster-clock-ptp-config.yaml
        ```

**Verification**

1.  Check that the `PtpConfig` profile is applied to the node.
    1.  Get the list of pods in the `openshift-ptp` namespace by running the following command:
        ```terminal
        $ oc get pods -n openshift-ptp -o wide
        ```
        ```terminal title="Example output"
        NAME                          READY   STATUS    RESTARTS   AGE     IP             NODE
        linuxptp-daemon-74m2g         3/3     Running   3          4d15h   10.16.230.7    compute-1.example.com
        ptp-operator-5f4f48d7c-x7zkf  1/1     Running   1          4d15h   10.128.1.145   compute-1.example.com
        ```
    1.  Check that the profile is correct. Examine the logs of the `linuxptp` daemon that corresponds to the node you specified in the `PtpConfig` profile.
    Run the following command:
        ```terminal
        $ oc logs linuxptp-daemon-74m2g -n openshift-ptp -c linuxptp-daemon-container
        ```
        ```terminal title="Example output"
        ts2phc[94980.334]: [ts2phc.0.config] nmea delay: 98690975 ns
        ts2phc[94980.334]: [ts2phc.0.config] ens3f0 extts index 0 at 1676577329.999999999 corr 0 src 1676577330.901342528 diff -1
        ts2phc[94980.334]: [ts2phc.0.config] ens3f0 master offset         -1 s2 freq      -1
        ts2phc[94980.441]: [ts2phc.0.config] nmea sentence: GNRMC,195453.00,A,4233.24427,N,07126.64420,W,0.008,,160223,,,A,V
        phc2sys[94980.450]: [ptp4l.0.config] CLOCK_REALTIME phc offset       943 s2 freq  -89604 delay    504
        phc2sys[94980.512]: [ptp4l.0.config] CLOCK_REALTIME phc offset      1000 s2 freq  -89264 delay    474
        ```