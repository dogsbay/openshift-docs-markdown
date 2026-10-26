{%- set _mod_docs_content_type = "PROCEDURE" %}
# Capture packets that contain OpenSSL plain text {id="network-observability-cli-plaintext-view-traffic_{{ context }}"}

Capture network packets and view the unencrypted plain text content from OpenSSL-encrypted connections by using the Network Observability CLI. {._abstract}

**Prerequisites**

*   The {{ oc_first }} is installed.
*   The Network Observability CLI (`oc netobserv`) plugin is installed.
*   You have `cluster-admin` privileges.
*   You have identified the pod IP address and port of the target application that uses OpenSSL.


:::warning

Plain text packet capture reveals unencrypted content from TLS connections, which can contain sensitive information such as passwords, API keys, or personal data. Ensure that appropriate access controls and retention policies are in place. Delete capture files securely when no longer needed.

:::


**Procedure**

1.  Start a packet capture with OpenSSL plain text enabled, filtering by the target pod IP and port:
    ```terminal
    $ oc netobserv packets --peer_ip=<pod_ip> --port=<pod_port> --enable_openssl
    ```

    Replace `<pod_ip>` with the pod IP address and `<pod_port>` with the port number.
    ```terminal title="Example"
    $ oc netobserv packets --peer_ip=10.131.0.15 --port=8443 --enable_openssl
    ```

    The CLI displays a live table of captured packets with plain text data from OpenSSL-encrypted connections.
1.  Pause the capture by pressing <kbd>Ctrl+Space</kbd>.
1.  Navigate the packet capture output:
    *   Use the arrow keys (<kbd>↑</kbd> <kbd>↓</kbd>) to select a packet.
    *   When the capture is paused, the selected packet’s payload is displayed in the detail panel.
    *   Press <kbd>Tab</kbd> to cycle focus between the filter input, packet table, and detail panel.
    *   Press <kbd>Esc</kbd> to resume the capture.
    *   You can also use the mouse to select packets and move focus between panels.
1.  Optional: Apply additional filters to narrow the capture scope:
    ```terminal
    $ oc netobserv packets --peer_ip=<pod_ip> --port=<pod_port> --query='SrcK8S_Namespace="<namespace>" or DstK8S_Namespace="<namespace>"' --protocol=TCP --enable_openssl
    ```

    You can combine filters such as `--protocol`, `--query`, or other options to focus on specific traffic. Use `--query` to filter by namespace, as `--namespace` changes where the CLI components are deployed.
1.  Optional: Capture packets to a file for later analysis:
    ```terminal
    $ oc netobserv packets --peer_ip=<pod_ip> --port=<pod_port> --enable_openssl --copy
    ```

    The CLI writes captured packet data, including plain text content, to the `./output/pcap` directory.
1.  Stop the packet capture:

    Press <kbd>Ctrl+C</kbd> to stop capturing packets and return to the shell prompt.

**Verification**

1.  If you captured packets to a file, verify the output:
    ```terminal
    $ ls ./output/pcap/
    ```

    The directory contains timestamped `.pcapng` capture files. Open a capture file with Wireshark for packet-level analysis.
1.  Verify the captured plain text:
    ```terminal
    $ ls ./output/plaintext/
    ```

    The directory contains timestamped `.jsonl` files with decoded plain text records.
1.  Examine a plain text capture:
    ```terminal
    $ less ./output/plaintext/<timestamp>.jsonl
    ```