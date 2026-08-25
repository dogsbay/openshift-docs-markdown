{%- set _mod_docs_content_type = "PROCEDURE" %}
# Capturing packets {id="network-observability-cli-capturing-packets_{{ context }}"}

Use the Network Observability CLI to capture network packets. You can apply filters and refine them live in the terminal for accurate, real-time debugging. {._abstract}

**Prerequisites**

*   Install the {{ oc_first }}.
*   Install the Network Observability CLI (`oc netobserv`) plugin.

**Procedure**

1.  Run the packet capture with filters enabled:
    ```terminal
    $ oc netobserv packets --action=Accept --cidr=0.0.0.0/0 --protocol=TCP --port=49051
    ```
1.  Add filters to the `live table filter` prompt in the terminal to refine the incoming packets. An example filter is as follows:
    ```terminal
    live table filter: [SrcK8S_Zone:us-west-1b] press enter to match multiple regular expressions at once
    ```
1.  Use the **PageUp** and **PageDown** keys to toggle between **None**, **Resource**, **Zone**, **Host**, **Owner** and **all of the above**.
1.  To stop capturing, press <kbd>Ctrl+C</kbd>.
1.  View the captured data, which is written to a single file in an `./output/pcap` directory located in the same path that was used to install the CLI:
    1.  The `./output/pcap/<capture_date_time>.pcap` file can be opened with Wireshark.