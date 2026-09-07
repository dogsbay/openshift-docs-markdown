{%- set _mod_docs_content_type = "REFERENCE" %}
# DPU provisioning fails with BMC certificate errors {id="nw-dpf-ts-bmc-certificates_{{ context }}"}

If DPU provisioning fails with certificate errors when you add worker nodes by using the Bare Metal Operator, the baseboard management controller (BMC) certificates might be untrusted or expired, or the `BareMetalHost` credentials might be incorrect. {._abstract}


Verify BMC certificate validity
:   Run the following command to inspect the BMC TLS certificate, replacing `<bmc_ip>` with the BMC IP address and `<bmc_hostname>` with the BMC hostname:
    ```terminal
    $ openssl s_client -connect <bmc_ip>:443 -servername <bmc_hostname>
    ```

    Update the certificates in the BMC configuration if they are expired or untrusted.


Verify BareMetalHost BMC credentials
:   Ensure that the `BareMetalHost` resource references the correct BMC secret and connection details, including the Redfish address and credentials for the worker server.