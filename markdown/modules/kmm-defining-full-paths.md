{%- set _mod_docs_content_type = "CONCEPT" %}
# Defining full paths {id="kmm-defining-full-paths_{{ context }}"}

You can define one or more absolute paths to kernel module `.ko` files inside the image. {._abstract}

The following example shows full path usage in the `sign.filesToSign` field: 

```yaml
sign:
  certSecret:
    name: <cert_secret>  
  keySecret:
    name: <key_secret>  
  filesToSign:
    - /opt/lib/modules/${KERNEL_FULL_VERSION}/<my-kmod>.ko
    - /opt/lib/modules/${KERNEL_FULL_VERSION}/<my_kmod1>.ko
    - /opt/lib/modules/${KERNEL_FULL_VERSION}/<my_kmod2>.ko
```