<a name="cluster-logging-exported-fields-top-level-fields_{{ context }}"></a>

The top level fields may be present in every record.

## message {id="_message"}

The original log entry text, UTF-8 encoded. This field may be absent or empty if a non-empty `structured` field is present. See the description of `structured` for more.


Data type
:   text

Example value
:   `HAPPY`

## structured {id="_structured"}

Original log entry as a structured object. This field may be present if the forwarder was configured to parse structured JSON logs. If the original log entry was a valid structured log, this field will contain an equivalent JSON structure. Otherwise this field will be empty or absent, and the `message` field will contain the original log message. The `structured` field can have any subfields that are included in the log message, there are no restrictions defined here.


Data type
:   group

Example value
:   map[message:starting fluentd worker pid=21631 ppid=21618 worker=0 pid:21631 ppid:21618 worker:0]

## @timestamp {id="_timestamp"}

A UTC value that marks when the log payload was created or, if the creation time is not known, when the log payload was first collected. The “@” prefix denotes a field that is reserved for a particular use. By default, most tools look for “@timestamp” with ElasticSearch.


Data type
:   date

Example value
:   `2015-01-24 14:06:05.071000000 Z`

## hostname {id="_hostname"}

The name of the host where this log message originated. In a Kubernetes cluster, this is the same as `kubernetes.host`.


Data type
:   keyword

## ipaddr4 {id="_ipaddr4"}

The IPv4 address of the source server. Can be an array.


Data type
:   ip

## ipaddr6 {id="_ipaddr6"}

The IPv6 address of the source server, if available. Can be an array.


Data type
:   ip

## level {id="_level"}

The logging level from various sources, including `rsyslog(severitytext property)`, a Python logging module, and others.

The following values come from [`syslog.h`](http://sourceware.org/git/?p=glibc.git;a=blob;f=misc/sys/syslog.h;h=ee01478c4b19a954426a96448577c5a76e6647c0;hb=HEAD#l74), and are preceded by their [numeric equivalents](http://sourceware.org/git/?p=glibc.git;a=blob;f=misc/sys/syslog.h;h=ee01478c4b19a954426a96448577c5a76e6647c0;hb=HEAD#l51):

*   `0` = `emerg`, system is unusable.
*   `1` = `alert`, action must be taken immediately.
*   `2` = `crit`, critical conditions.
*   `3` = `err`, error conditions.
*   `4` = `warn`, warning conditions.
*   `5` = `notice`, normal but significant condition.
*   `6` = `info`, informational.
*   `7` = `debug`, debug-level messages.

The two following values are not part of `syslog.h` but are widely used:

*   `8` = `trace`, trace-level messages, which are more verbose than `debug` messages.
*   `9` = `unknown`, when the logging system gets a value it does not recognize.

Map the log levels or priorities of other logging systems to their nearest match in the preceding list. For example, from [python logging](https://docs.python.org/2.7/library/logging.html#logging-levels), you can match `CRITICAL` with `crit`, `ERROR` with `err`, and so on.


Data type
:   keyword

Example value
:   `info`

## pid {id="_pid"}

The process ID of the logging entity, if available.


Data type
:   keyword

## service {id="_service"}

The name of the service associated with the logging entity, if available. For example, syslog’s `APP-NAME` and rsyslog’s `programname` properties are mapped to the service field.


Data type
:   keyword

## tags {id="_tags"}

Optional. An operator-defined list of tags placed on each log by the collector or normalizer. The payload can be a string with whitespace-delimited string tokens or a JSON list of string tokens.


Data type
:   text

## file {id="_file"}

The path to the log file from which the collector reads this log entry. Normally, this is a path in the `/var/log` file system of a cluster node.


Data type
:   text

## offset {id="_offset"}

The offset value. Can represent bytes to the start of the log line in the file (zero- or one-based), or log line numbers (zero- or one-based), so long as the values are strictly monotonically increasing in the context of a single log file. The values are allowed to wrap, representing a new version of the log file (rotation).


Data type
:   long