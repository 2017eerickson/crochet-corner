def validate_size(val):
    acceptable_sizes = ["S","M","LG","XL","XXL"]
    if val not in acceptable_sizes:
        raise ValueError (f'size must be {acceptable_sizes}')