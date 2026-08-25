{% if context == "installing-restricted-networks-bare-metal" %}
{%- set restricted = true -%}
{% endif %}

{%- set _mod_docs_content_type = "REFERENCE" %}
# Examples of retaining existing partitions {id="installation-user-infra-machines-advanced-retain-disk_{{ context }}"}

For an ISO installation, you can add options to the `coreos-installer` command that causes the installation program to maintain one or more existing partitions. For a PXE installation, you can add `coreos.inst.*` options to the `APPEND` parameter to preserve partitions. {._abstract}

Saved partitions might be data partitions from an existing {{ product_title }} system. You can identify the disk partitions you want to keep either by partition label or by number.


:::note

If you save existing partitions, and those partitions do not leave enough space for {{ op_system }}, the installation fails without damaging the saved partitions.

:::


The following examples preserve any existing partition during an ISO installation in which the partition label begins with `data` (`data*`):

{% if not restricted %}
```terminal
# coreos-installer install --ignition-url http://10.0.2.2:8080/user.ign \
--save-partlabel 'data*' \
/dev/disk/by-id/scsi-<serial_number>
```
{% endif %}

{% if restricted %}
```terminal
# coreos-installer install --ignition-url http://10.0.2.2:8080/user.ign \
--save-partlabel 'data*' \
--offline \
/dev/disk/by-id/scsi-<serial_number>
```
{% endif %}

The following example runs the `coreos-installer` in a way that preserves
the sixth (6) partition on the disk:

{% if not restricted %}
```terminal
# coreos-installer install --ignition-url http://10.0.2.2:8080/user.ign \
--save-partindex 6 /dev/disk/by-id/scsi-<serial_number>
```
{% endif %}

{% if restricted %}
```terminal
# coreos-installer install --ignition-url http://10.0.2.2:8080/user.ign \
--save-partindex 6 \
--offline \
/dev/disk/by-id/scsi-<serial_number>
```
{% endif %}

The following example preserves partitions 5 and higher:

{% if not restricted %}
```terminal
# coreos-installer install --ignition-url http://10.0.2.2:8080/user.ign \
--save-partindex 5- /dev/disk/by-id/scsi-<serial_number>
```
{% endif %}

{% if restricted %}
```terminal
# coreos-installer install --ignition-url http://10.0.2.2:8080/user.ign \
--save-partindex 5- \
--offline \
/dev/disk/by-id/scsi-<serial_number>
```
{% endif %}

In the earlier examples where partition saving is used, `coreos-installer` recreates the partition immediately.

The following examples preserve existing partitions during a PXE installation. The following `APPEND` option preserves any partition in which the partition label begins with 'data' ('data*').

```terminal
coreos.inst.save_partlabel=data*
```

The following `APPEND` option preserves partitions 5 and higher:

```terminal
coreos.inst.save_partindex=5-
```

The following `APPEND` option preserves partition 6:

```terminal
coreos.inst.save_partindex=6
```

{% if context == "installing-restricted-networks-bare-metal" %}
{%- set restricted = false -%}
{% endif %}