{%- set _mod_docs_content_type = "CONCEPT" %}
# Configure guest caching for disk {id="configure-guest-caching-for-disk_{{ context }}"}

To ensure that the guest manages caching instead of the host, configure your disk devices. {._abstract}

Ensure that the driver element of the disk device includes the `cache="none"` and `io="native"` parameters.

```xml title="Example configuration"
<disk type="block" device="disk">
    <driver name="qemu" type="raw" cache="none" io="native" iothread="1"/>
...
</disk>
```