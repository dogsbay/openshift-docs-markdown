{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enable automatic updates for Red&#160;Hat virtio-win drivers {id="virt-updating-red-hat-virtio-drivers-windows_{{ context }}"}

If the Windows Update service (WUS) is restricted to allow only drivers explicitly signed and published by Microsoft, you must manually configure automatic Red&#160;Hat `virtio-win` driver updates. Otherwise, automatic updates are disabled. {._abstract}

**Prerequisites**

*   The cluster must have internet connectivity. Disconnected clusters cannot reach the WUS.

**Procedure**

1.  Import the Red Hat Release Certificate into the Trusted Publishers store.

    Example command:
    ```powershell
    Import-Certificate -FilePath "redhat-driver-cert.cer" -CertStoreLocation Cert:\LocalMachine\TrustedPublisher
    ```
1.  In the Group Policy Management Console (GPMC):
    1.  Set the `Allow signed updates from an intranet Microsoft update service location` policy to `Enabled`.

        If a driver is signed by a certificate in the Trusted Publishers store, it is now accepted, even if it didn’t come from Microsoft directly.
    1.  Set the `Do not include drivers with Windows Updates` policy to `Disabled`.