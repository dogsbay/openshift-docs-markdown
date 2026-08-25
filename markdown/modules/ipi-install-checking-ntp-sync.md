{%- set _mod_docs_content_type = "PROCEDURE" %}
# Checking NTP server synchronization {id="checking-ntp-sync_{{ context }}"}

The {{ product_title }} installation program installs the `chrony` Network Time Protocol (NTP) service on the cluster nodes. To complete installation, each node must have access to an NTP time server. You can verify NTP server synchronization by using the `chrony` service. {._abstract}

For disconnected clusters, you must configure the NTP servers on the control plane nodes. For more information see "Configuring NTP for disconnected clusters".

**Prerequisites**

*   You installed the `chrony` package on the target node.

**Procedure**

1.  Log in to the node by using the `ssh` command.
1.  View the NTP servers available to the node by running the following command:
    ```terminal
    $ chronyc sources
    ```
    ```terminal title="Example output"
    MS Name/IP address         Stratum Poll Reach LastRx Last sample
    ===============================================================================
    ^+ time.cloudflare.com           3  10   377   187   -209us[ -209us] +/-   32ms
    ^+ t1.time.ir2.yahoo.com         2  10   377   185  -4382us[-4382us] +/-   23ms
    ^+ time.cloudflare.com           3  10   377   198   -996us[-1220us] +/-   33ms
    ^* brenbox.westnet.ie            1  10   377   193  -9538us[-9761us] +/-   24ms
    ```
1.  Use the `ping` command to ensure that the node can access an NTP server, for example:
    ```terminal
    $ ping time.cloudflare.com
    ```
    ```terminal title="Example output"
    PING time.cloudflare.com (162.159.200.123) 56(84) bytes of data.
    64 bytes from time.cloudflare.com (162.159.200.123): icmp_seq=1 ttl=54 time=32.3 ms
    64 bytes from time.cloudflare.com (162.159.200.123): icmp_seq=2 ttl=54 time=30.9 ms
    64 bytes from time.cloudflare.com (162.159.200.123): icmp_seq=3 ttl=54 time=36.7 ms
    ...
    ```