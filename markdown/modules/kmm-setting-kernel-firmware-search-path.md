{%- set _mod_docs_content_type = "PROCEDURE" %}
# Setting the kernel firmware search path {id="kmm-setting-kernel-firmware-search-path_{{ context }}"}

To configure where KMM worker pods search for firmware on {{ product_title }} nodes, you can set the `worker.setFirmwareClassPath` parameter in the Operator configuration. {._abstract}

The Linux kernel accepts the `firmware_class.path` parameter as a search path for firmware, as explained in [Firmware search paths](https://www.kernel.org/doc/html/latest/driver-api/firmware/fw_search_path.html).

**Procedure**

*   To define a firmware search path, set `worker.setFirmwareClassPath` to `/var/lib/firmware` in the Operator configuration.