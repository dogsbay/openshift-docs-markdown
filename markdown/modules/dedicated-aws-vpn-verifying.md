{%- set _mod_docs_content_type = "PROCEDURE" %}
# Verifying the VPN connection {id="dedicated-aws-vpn-verifying"}

After you have set up your side of the Virtual Private Network (VPN) tunnel, you can verify that the tunnel is up in the AWS console and that connectivity across the tunnel is working. {._abstract}

**Prerequisites**

*   Created a VPN connection.

**Procedure**

1.  Verify the tunnel is up in AWS.
    1.  From the VPC Dashboard, under **Virtual private network (VPN)**, click on **Site-to-Site VPN connections**.
    1.  Select the VPN connection you created previously and click the **Tunnel details** tab.
    1.  You should see that at least one of the VPN tunnels is in an **Up** status.
1.  Verify the connection.

    To test network connectivity to an endpoint device, `nc` (or `netcat`) is a helpful troubleshooting tool. It is included in the default image and provides quick and clear output if a connection can be established:
    1.  Create a temporary pod using the `busybox` image, which cleans up after itself:
        ```terminal
        $ oc run netcat-test \
            --image=busybox -i -t \
            --restart=Never --rm \
            -- /bin/sh
        ```
    1.  Check the connection using `nc`.
        *   Example successful connection results:
            ```terminal
            / nc -zvv 192.168.1.1 8080
            10.181.3.180 (10.181.3.180:8080) open
            sent 0, rcvd 0
            ```
        *   Example failed connection results:
            ```terminal
            / nc -zvv 192.168.1.2 8080
            nc: 10.181.3.180 (10.181.3.180:8081): Connection refused
            sent 0, rcvd 0
            ```
    1.  Exit the container, which automatically deletes the Pod:
        ```terminal
        / exit
        ```