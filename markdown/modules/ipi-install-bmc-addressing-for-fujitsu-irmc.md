{%- set _mod_docs_content_type = "REFERENCE" %}
# BMC addressing for Fujitsu iRMC {id="bmc-addressing-for-fujitsu-irmc_{{ context }}"}

You can connect to a Fujitsu iRMC system using the iRMC protocol or the IPMI protocol. The `address` field for each `bmc` entry is a URL for connecting to the {{ product_title }} cluster nodes, including the type of controller in the URL scheme and its location on the network. {._abstract}

| Protocol | Address Format |
| --- | --- |
| iRMC | `irmc://<out-of-band-ip>` |
| IPMI | `ipmi://<out-of-band-ip>` |

Fujitsu nodes can use `irmc://<out-of-band-ip>` and defaults to port `443`. The following example demonstrates an iRMC configuration within the `install-config.yaml` file.

```yaml
platform:
  baremetal:
    hosts:
      - name: openshift-master-0
        role: master
        bmc:
          address: irmc://<out-of-band-ip>
          username: <user>
          password: <password>
```


:::note

Currently Fujitsu supports iRMC S5 firmware version 3.05P and above for installer-provisioned installation on bare metal.

:::