{%- set _mod_docs_content_type = "REFERENCE" %}
# BMC addressing for Cisco Integrated Management Controller {id="bmc-addressing-for-cisco-cimc_{{ context }}"}

You can connect to a Cisco Integrated Management Controller (CIMC) system using the Redfish virtual media protocol. The `address` field for each `bmc` entry is a URL for connecting to the {{ product_title }} cluster nodes, including the type of controller in the URL scheme and its location on the network. {._abstract}

For Cisco UCS C-Series and X-Series servers, Red Hat supports Cisco Integrated Management Controller (CIMC).

<table>
<thead>
<tr>
  <th>Protocol</th>
  <th>Address Format</th>
</tr>
</thead>
<tbody>
<tr>
  <td>Redfish virtual media</td>
  <td><code>redfish-virtualmedia://<server_kvm_ip>/redfish/v1/Systems/<serial_number></code></td>
</tr>
</tbody>
</table>

To enable Redfish virtual media for Cisco UCS C-Series and X-Series servers, use `redfish-virtualmedia://` in the `address` setting. The following example demonstrates using Redfish virtual media within the `install-config.yaml` file.

```yaml
platform:
  baremetal:
    hosts:
      - name: openshift-master-0
        role: master
        bmc:
          address: redfish-virtualmedia://<server_kvm_ip>/redfish/v1/Systems/<serial_number>
          username: <user>
          password: <password>
```

While it is recommended to have a certificate of authority for the out-of-band management addresses, you must include `disableCertificateVerification: True` in the `bmc` configuration if using self-signed certificates. The following example demonstrates a Redfish configuration by using the `disableCertificateVerification: True` configuration parameter within the `install-config.yaml` file.

```yaml
platform:
  baremetal:
    hosts:
      - name: openshift-master-0
        role: master
        bmc:
          address: redfish-virtualmedia://<server_kvm_ip>/redfish/v1/Systems/<serial_number>
          username: <user>
          password: <password>
          disableCertificateVerification: True
```