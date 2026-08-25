{%- set _mod_docs_content_type = "PROCEDURE" %}
# Rekeying compromised key material {id="nbde-compromise-of-key-material_{{ context }}"}

If key material is potentially exposed to unauthorized third parties, such as through the physical theft of a Tang server or associated data, immediately rotate the keys.

**Procedure**

1.  Rekey any Tang server holding the affected material.
1.  Rekey all clients using the Tang server.
1.  Destroy the original key material.
1.  Scrutinize any incidents that result in unintended exposure of the master encryption key. If possible, take compromised nodes offline and re-encrypt their disks.


:::tip

Reformatting and reinstalling on the same physical hardware, although slow, is easy to automate and test.

:::