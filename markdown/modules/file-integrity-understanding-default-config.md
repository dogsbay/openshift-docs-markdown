{%- set _mod_docs_content_type = "REFERENCE" %}
# Understanding the default File Integrity Operator configuration {id="file-integrity-understanding-default-config_{{ context }}"}

The default configuration for a `FileIntegrity` instance provides coverage for files under key system directories and excludes others. {._abstract}

Below is an excerpt from the `aide.conf` key of the config map:

```bash
@@define DBDIR /hostroot/etc/kubernetes
@@define LOGDIR /hostroot/etc/kubernetes
database=file:@@{DBDIR}/aide.db.gz
database_out=file:@@{DBDIR}/aide.db.gz
gzip_dbout=yes
verbose=5
report_url=file:@@{LOGDIR}/aide.log
report_url=stdout
PERMS = p+u+g+acl+selinux+xattrs
CONTENT_EX = sha512+ftype+p+u+g+n+acl+selinux+xattrs

/hostroot/boot/    	CONTENT_EX
/hostroot/root/\..* PERMS
/hostroot/root/   CONTENT_EX
```

The default configuration for a `FileIntegrity` instance provides coverage for files under the following directories:

*   `/root`
*   `/boot`
*   `/usr`
*   `/etc`

The following directories are not covered:

*   `/var`
*   `/opt`
*   Some {{ product_title }}-specific excludes under `/etc/`