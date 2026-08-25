{%- set _mod_docs_content_type = "CONCEPT" %}
# About FlexVolume drivers {id="flexvolume-drivers_{{ context }}"}

When working with FlexVolume drivers, it is helpful to understand how {{ product_title }} interact with the drivers. {._abstract}

A FlexVolume driver is an executable file that resides in a well-defined directory on all nodes in the cluster. {{ product_title }} calls the FlexVolume driver whenever it needs to mount or unmount a volume represented by a `PersistentVolume` object with `flexVolume` as the source.


:::important

Attach and detach operations are not supported in {{ product_title }} for FlexVolume.

:::