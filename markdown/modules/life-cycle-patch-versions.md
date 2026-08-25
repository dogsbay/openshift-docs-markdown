{%- set _mod_docs_content_type = "CONCEPT" %}
# Patch versions (x.y.Z) {id="rosa-patch-versions_{{ context }}"}

During the period in which a minor version is supported, Red&#160;Hat supports all OpenShift Container Platform patch versions unless otherwise specified. {._abstract}

For reasons of platform security and stability, a patch release may be deprecated, which would prevent installations of that release and trigger mandatory upgrades off that release.

**Example**

1.  4.7.6 is found to contain a critical CVE.
1.  Any releases impacted by the CVE will be removed from the supported patch release list. In
  addition, any clusters running 4.7.6 will be scheduled for automatic upgrades within 48 hours.