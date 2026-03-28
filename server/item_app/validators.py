def validate_size(val):
    acceptable_sizes = ["S","M","LG","XL","XXL"]
    if val not in acceptable_sizes:
        raise ValueError (f'size must be {acceptable_sizes}')
    
def validate_Category(val):
    acceptable_categories = ["Hoods", "Beanies","Cat" "Misc"]
    if val not in acceptable_categories:
        raise ValueError (f'category must be {acceptable_categories}')