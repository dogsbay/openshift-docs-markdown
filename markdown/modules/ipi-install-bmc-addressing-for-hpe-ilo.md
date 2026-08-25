{%- set _mod_docs_content_type = "REFERENCE" %}
# BMC addressing for HPE iLO {id="bmc-addressing-for-hpe-ilo_{{ context }}"}

You can connect to an HPE iLO system using the Redfish virtual media protocol, the Redfish network boot protocol, or the IPMI protocol. {._abstract}

The `address` field for each `bmc` entry is a URL for connecting to the {{ product_title }} cluster nodes, including the type of controller in the URL scheme and its location on the network.

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
  <td><code>redfish-virtualmedia://<out_of_band_ip>/redfish/v1/Systems/1</code></td>
</tr>
<tr>
  <td>Redfish network boot</td>
  <td><code>redfish://<out_of_band_ip>/redfish/v1/Systems/1</code></td>
</tr>
<tr>
  <td>IPMI</td>
  <td><code>ipmi://<out_of_band_ip></code></td>
</tr>
</tbody>
</table>

## Redfish virtual media for HPE iLO {id="_redfish_virtual_media_for_hpe_ilo"}

To enable Redfish virtual media for HPE servers, use `redfish-virtualmedia://` in the `address` setting. The following example demonstrates using Redfish virtual media within the `install-config.yaml` file.

```yaml
platform:
  baremetal:
    hosts:
      - name: openshift-master-0
        role: master
        bmc:
          address: redfish-virtualmedia://<out_of_band_ip>/redfish/v1/Systems/1
          username: <user>
          password: <password>
```

It is recommended to have a certificate of authority for the out-of-band management addresses. For {{ product_title }} 4.16 and earlier, you must include `disableCertificateVerification: True` in the `bmc` configuration if using self-signed certificates. For {{ product_title }} 4.17 and later, you can include `disableCertificateVerification: False` when used in conjunction with the `bmcCACert` parameter.

The following example demonstrates a Redfish configuration by using the `disableCertificateVerification: True` configuration parameter within the `install-config.yaml` file.

```yaml
platform:
  baremetal:
    hosts:
      - name: openshift-master-0
        role: master
        bmc:
          address: redfish-virtualmedia://<out_of_band_ip>/redfish/v1/Systems/1
          username: <user>
          password: <password>
          disableCertificateVerification: True
```

The following example demonstrates a Redfish configuration by using the `disableCertificateVerification: False` configuration parameter along with the `bmcCACert` configuration parameter within the `install-config.yaml` file.

```yaml
platform:
  baremetal:
    bmcCACert:
      -----BEGIN CERTIFICATE-----
      ......
      ......
      ......
      -----END CERTIFICATE-----
      -----BEGIN CERTIFICATE-----
      ......
      ......
      ......
      -----END CERTIFICATE-----
      -----BEGIN CERTIFICATE-----
      ......
      ......
      ......
      -----END CERTIFICATE-----
    hosts:
      - name: openshift-master-0
        role: master
        bmc:
          address: redfish-virtualmedia://<out_of_band_ip>/redfish/v1/Systems/1
          username: <user>
          password: <password>
          disableCertificateVerification: False
```


:::note

Redfish virtual media is not supported on 9th generation systems running iLO4, because Ironic does not support iLO4 with virtual media.

:::


## Redfish network boot for HPE iLO {id="_redfish_network_boot_for_hpe_ilo"}

To enable Redfish, use `redfish://` or `redfish+http://` to disable TLS. The installation program requires both the hostname or the IP address and the path to the system ID. The following example demonstrates a Redfish configuration within the `install-config.yaml` file.

```yaml
platform:
  baremetal:
    hosts:
      - name: openshift-master-0
        role: master
        bmc:
          address: redfish://<out_of_band_ip>/redfish/v1/Systems/1
          username: <user>
          password: <password>
```

It is recommended to have a certificate of authority for the out-of-band management addresses. For {{ product_title }} 4.16 and earlier, you must include `disableCertificateVerification: True` in the `bmc` configuration if using self-signed certificates. For {{ product_title }} 4.17 and later, you can include `disableCertificateVerification: False` when used in conjunction with the `bmcCACert` parameter.

The following example demonstrates a Redfish configuration by using the `disableCertificateVerification: True` configuration parameter within the `install-config.yaml` file.

```yaml
platform:
  baremetal:
    hosts:
      - name: openshift-master-0
        role: master
        bmc:
          address: redfish://<out_of_band_ip>/redfish/v1/Systems/1
          username: <user>
          password: <password>
          disableCertificateVerification: True
```

The following example demonstrates a Redfish configuration by using the `disableCertificateVerification: False` configuration parameter along with the `bmcCACert` configuration parameter within the `install-config.yaml` file.

```yaml
platform:
  baremetal:
    bmcCACert:
      -----BEGIN CERTIFICATE-----
      ......
      ......
      ......
      -----END CERTIFICATE-----
      -----BEGIN CERTIFICATE-----
      ......
      ......
      ......
      -----END CERTIFICATE-----
      -----BEGIN CERTIFICATE-----
      ......
      ......
      ......
      -----END CERTIFICATE-----
    hosts:
      - name: openshift-master-0
        role: master
        bmc:
          address: redfish://<out_of_band_ip>/redfish/v1/Systems/1
          username: <user>
          password: <password>
          disableCertificateVerification: True
```